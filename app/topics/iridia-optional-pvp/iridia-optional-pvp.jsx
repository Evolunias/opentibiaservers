import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('iridia-optional-pvp');
}

export default function IridiaOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="iridia-optional-pvp" />;
}

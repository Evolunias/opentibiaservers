import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('iridia-open-pvp');
}

export default function IridiaOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="iridia-open-pvp" />;
}

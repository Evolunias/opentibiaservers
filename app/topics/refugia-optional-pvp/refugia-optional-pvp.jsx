import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('refugia-optional-pvp');
}

export default function RefugiaOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="refugia-optional-pvp" />;
}

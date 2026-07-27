import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-pvp');
}

export default function AureraGlobalPvpKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-pvp" />;
}

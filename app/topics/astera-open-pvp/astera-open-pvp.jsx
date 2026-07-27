import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('astera-open-pvp');
}

export default function AsteraOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="astera-open-pvp" />;
}

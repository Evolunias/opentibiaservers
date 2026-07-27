import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubera-optional-pvp');
}

export default function RuberaOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="rubera-optional-pvp" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('astera-optional-pvp');
}

export default function AsteraOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="astera-optional-pvp" />;
}

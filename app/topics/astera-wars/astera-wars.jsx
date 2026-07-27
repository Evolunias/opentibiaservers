import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('astera-wars');
}

export default function AsteraWarsKeywordPage() {
  return <StaticKeywordPage slug="astera-wars" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-wars');
}

export default function TibijkaWarsKeywordPage() {
  return <StaticKeywordPage slug="tibijka-wars" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tenebra-wars');
}

export default function TenebraWarsKeywordPage() {
  return <StaticKeywordPage slug="tenebra-wars" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('inferna-wars');
}

export default function InfernaWarsKeywordPage() {
  return <StaticKeywordPage slug="inferna-wars" />;
}

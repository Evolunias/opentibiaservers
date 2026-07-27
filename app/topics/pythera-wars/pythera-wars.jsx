import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pythera-wars');
}

export default function PytheraWarsKeywordPage() {
  return <StaticKeywordPage slug="pythera-wars" />;
}

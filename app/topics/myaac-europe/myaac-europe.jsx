import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('myaac-europe');
}

export default function MyaacEuropeKeywordPage() {
  return <StaticKeywordPage slug="myaac-europe" />;
}

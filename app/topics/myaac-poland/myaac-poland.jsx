import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('myaac-poland');
}

export default function MyaacPolandKeywordPage() {
  return <StaticKeywordPage slug="myaac-poland" />;
}

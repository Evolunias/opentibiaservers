import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('myaac-high-exp');
}

export default function MyaacHighExpKeywordPage() {
  return <StaticKeywordPage slug="myaac-high-exp" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('myaac-client');
}

export default function MyaacClientKeywordPage() {
  return <StaticKeywordPage slug="myaac-client" />;
}

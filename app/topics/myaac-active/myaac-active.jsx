import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('myaac-active');
}

export default function MyaacActiveKeywordPage() {
  return <StaticKeywordPage slug="myaac-active" />;
}

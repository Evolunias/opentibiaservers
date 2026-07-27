import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('myaac-sweden');
}

export default function MyaacSwedenKeywordPage() {
  return <StaticKeywordPage slug="myaac-sweden" />;
}

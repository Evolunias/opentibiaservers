import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('myaac-usa');
}

export default function MyaacUsaKeywordPage() {
  return <StaticKeywordPage slug="myaac-usa" />;
}

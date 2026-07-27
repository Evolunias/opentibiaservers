import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('myaac-pvp');
}

export default function MyaacPvpKeywordPage() {
  return <StaticKeywordPage slug="myaac-pvp" />;
}

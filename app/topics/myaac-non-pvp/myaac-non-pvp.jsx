import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('myaac-non-pvp');
}

export default function MyaacNonPvpKeywordPage() {
  return <StaticKeywordPage slug="myaac-non-pvp" />;
}

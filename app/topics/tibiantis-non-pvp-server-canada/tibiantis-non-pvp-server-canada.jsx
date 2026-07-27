import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-non-pvp-server-canada');
}

export default function TibiantisNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-non-pvp-server-canada" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-non-pvp-server-canada');
}

export default function AlasteraNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="alastera-non-pvp-server-canada" />;
}

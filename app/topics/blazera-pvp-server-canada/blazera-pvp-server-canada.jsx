import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-pvp-server-canada');
}

export default function BlazeraPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="blazera-pvp-server-canada" />;
}

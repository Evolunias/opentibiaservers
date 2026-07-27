import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-pvp-server-france');
}

export default function BlazeraPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="blazera-pvp-server-france" />;
}

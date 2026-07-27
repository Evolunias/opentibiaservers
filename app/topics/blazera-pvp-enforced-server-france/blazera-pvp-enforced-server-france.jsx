import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-pvp-enforced-server-france');
}

export default function BlazeraPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="blazera-pvp-enforced-server-france" />;
}

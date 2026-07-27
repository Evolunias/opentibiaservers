import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-pvp-enforced-server-france');
}

export default function RuthlessChaosPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-pvp-enforced-server-france" />;
}

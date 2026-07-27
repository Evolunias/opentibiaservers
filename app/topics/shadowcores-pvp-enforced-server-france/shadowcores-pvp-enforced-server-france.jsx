import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvp-enforced-server-france');
}

export default function ShadowcoresPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvp-enforced-server-france" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-server-france');
}

export default function PvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-server-france" />;
}

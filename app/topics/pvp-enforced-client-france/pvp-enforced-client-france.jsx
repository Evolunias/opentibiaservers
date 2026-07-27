import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-client-france');
}

export default function PvpEnforcedClientFranceKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-client-france" />;
}

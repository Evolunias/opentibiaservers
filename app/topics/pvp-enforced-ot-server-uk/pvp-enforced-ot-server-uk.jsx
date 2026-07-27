import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-ot-server-uk');
}

export default function PvpEnforcedOtServerUkKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-ot-server-uk" />;
}

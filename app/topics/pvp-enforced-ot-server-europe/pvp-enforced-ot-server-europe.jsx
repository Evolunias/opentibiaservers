import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-ot-server-europe');
}

export default function PvpEnforcedOtServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-ot-server-europe" />;
}

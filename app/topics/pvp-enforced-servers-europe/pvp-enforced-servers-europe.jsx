import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-servers-europe');
}

export default function PvpEnforcedServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-servers-europe" />;
}

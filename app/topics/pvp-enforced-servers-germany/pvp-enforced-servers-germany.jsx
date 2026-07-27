import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-servers-germany');
}

export default function PvpEnforcedServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-servers-germany" />;
}

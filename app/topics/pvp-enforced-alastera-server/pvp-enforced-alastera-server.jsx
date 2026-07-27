import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-alastera-server');
}

export default function PvpEnforcedAlasteraServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-alastera-server" />;
}

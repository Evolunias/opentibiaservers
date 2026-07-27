import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-archlight-server');
}

export default function PvpEnforcedArchlightServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-archlight-server" />;
}

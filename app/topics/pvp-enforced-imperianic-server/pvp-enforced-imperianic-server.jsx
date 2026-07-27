import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-imperianic-server');
}

export default function PvpEnforcedImperianicServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-imperianic-server" />;
}

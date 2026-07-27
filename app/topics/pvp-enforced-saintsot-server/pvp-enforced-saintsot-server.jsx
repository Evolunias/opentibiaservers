import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-saintsot-server');
}

export default function PvpEnforcedSaintsotServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-saintsot-server" />;
}

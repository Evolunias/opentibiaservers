import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-10-98-pvp-enforced-server');
}

export default function Tibianus1098PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-10-98-pvp-enforced-server" />;
}

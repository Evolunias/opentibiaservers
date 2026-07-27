import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-10-0-pvp-enforced-server');
}

export default function Tibianus100PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-10-0-pvp-enforced-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-9-6-pvp-enforced-server');
}

export default function Tibianus96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-9-6-pvp-enforced-server" />;
}

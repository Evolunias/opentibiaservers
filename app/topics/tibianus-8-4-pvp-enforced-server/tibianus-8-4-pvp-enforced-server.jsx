import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-4-pvp-enforced-server');
}

export default function Tibianus84PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-4-pvp-enforced-server" />;
}

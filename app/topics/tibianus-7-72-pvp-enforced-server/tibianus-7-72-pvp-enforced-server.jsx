import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-7-72-pvp-enforced-server');
}

export default function Tibianus772PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-7-72-pvp-enforced-server" />;
}

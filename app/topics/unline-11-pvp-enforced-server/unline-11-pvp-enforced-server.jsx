import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-11-pvp-enforced-server');
}

export default function Unline11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="unline-11-pvp-enforced-server" />;
}

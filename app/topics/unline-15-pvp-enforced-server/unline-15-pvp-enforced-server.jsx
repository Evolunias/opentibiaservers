import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-15-pvp-enforced-server');
}

export default function Unline15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="unline-15-pvp-enforced-server" />;
}

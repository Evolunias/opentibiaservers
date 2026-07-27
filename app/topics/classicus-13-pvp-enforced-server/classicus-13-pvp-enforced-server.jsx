import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-13-pvp-enforced-server');
}

export default function Classicus13PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-13-pvp-enforced-server" />;
}

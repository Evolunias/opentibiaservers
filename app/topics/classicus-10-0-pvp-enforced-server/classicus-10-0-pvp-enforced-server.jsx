import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-10-0-pvp-enforced-server');
}

export default function Classicus100PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-10-0-pvp-enforced-server" />;
}

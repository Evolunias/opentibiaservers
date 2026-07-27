import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-9-6-pvp-enforced-server');
}

export default function Classicus96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-9-6-pvp-enforced-server" />;
}

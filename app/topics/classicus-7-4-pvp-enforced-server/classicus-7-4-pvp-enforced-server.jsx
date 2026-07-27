import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-7-4-pvp-enforced-server');
}

export default function Classicus74PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-7-4-pvp-enforced-server" />;
}

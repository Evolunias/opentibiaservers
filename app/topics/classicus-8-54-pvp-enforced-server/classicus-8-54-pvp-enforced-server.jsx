import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-54-pvp-enforced-server');
}

export default function Classicus854PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-54-pvp-enforced-server" />;
}

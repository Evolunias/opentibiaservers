import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-pvp-enforced-server-brazil');
}

export default function ClassicusPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="classicus-pvp-enforced-server-brazil" />;
}

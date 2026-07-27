import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-pvp-enforced-server-mexico');
}

export default function ClassicusPvpEnforcedServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="classicus-pvp-enforced-server-mexico" />;
}

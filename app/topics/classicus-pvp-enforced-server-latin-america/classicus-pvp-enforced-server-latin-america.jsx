import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-pvp-enforced-server-latin-america');
}

export default function ClassicusPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-pvp-enforced-server-latin-america" />;
}

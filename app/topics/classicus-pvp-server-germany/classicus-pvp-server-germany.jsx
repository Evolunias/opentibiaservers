import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-pvp-server-germany');
}

export default function ClassicusPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="classicus-pvp-server-germany" />;
}

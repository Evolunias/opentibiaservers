import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-non-pvp-server-germany');
}

export default function ClassicusNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="classicus-non-pvp-server-germany" />;
}

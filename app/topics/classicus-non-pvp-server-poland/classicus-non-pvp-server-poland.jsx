import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-non-pvp-server-poland');
}

export default function ClassicusNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="classicus-non-pvp-server-poland" />;
}

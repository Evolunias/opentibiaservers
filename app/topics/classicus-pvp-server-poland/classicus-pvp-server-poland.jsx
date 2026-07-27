import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-pvp-server-poland');
}

export default function ClassicusPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="classicus-pvp-server-poland" />;
}

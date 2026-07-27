import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-non-pvp-server-europe');
}

export default function ClassicusNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="classicus-non-pvp-server-europe" />;
}

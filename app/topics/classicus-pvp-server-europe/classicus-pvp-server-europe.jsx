import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-pvp-server-europe');
}

export default function ClassicusPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="classicus-pvp-server-europe" />;
}

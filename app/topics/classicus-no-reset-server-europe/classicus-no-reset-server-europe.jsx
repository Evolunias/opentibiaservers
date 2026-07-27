import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-no-reset-server-europe');
}

export default function ClassicusNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="classicus-no-reset-server-europe" />;
}

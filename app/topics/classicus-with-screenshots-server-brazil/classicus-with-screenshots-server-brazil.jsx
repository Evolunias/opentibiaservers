import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-screenshots-server-brazil');
}

export default function ClassicusWithScreenshotsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-screenshots-server-brazil" />;
}

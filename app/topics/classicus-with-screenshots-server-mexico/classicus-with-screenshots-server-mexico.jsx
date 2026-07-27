import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-screenshots-server-mexico');
}

export default function ClassicusWithScreenshotsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-screenshots-server-mexico" />;
}

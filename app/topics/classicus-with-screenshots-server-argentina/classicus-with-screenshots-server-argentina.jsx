import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-screenshots-server-argentina');
}

export default function ClassicusWithScreenshotsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-screenshots-server-argentina" />;
}

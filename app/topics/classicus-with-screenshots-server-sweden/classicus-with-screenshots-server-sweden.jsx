import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-screenshots-server-sweden');
}

export default function ClassicusWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-screenshots-server-sweden" />;
}

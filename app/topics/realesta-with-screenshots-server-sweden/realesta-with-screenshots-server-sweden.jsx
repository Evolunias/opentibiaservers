import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-screenshots-server-sweden');
}

export default function RealestaWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-screenshots-server-sweden" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-with-screenshots-server-sweden');
}

export default function ImperianicWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="imperianic-with-screenshots-server-sweden" />;
}

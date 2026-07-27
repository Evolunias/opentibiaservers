import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-screenshots-server-sweden');
}

export default function NilotWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-screenshots-server-sweden" />;
}

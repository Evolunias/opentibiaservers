import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-screenshots-server-mexico');
}

export default function NilotWithScreenshotsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-screenshots-server-mexico" />;
}

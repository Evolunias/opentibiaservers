import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-screenshots-server-uk');
}

export default function NilotWithScreenshotsServerUkKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-screenshots-server-uk" />;
}

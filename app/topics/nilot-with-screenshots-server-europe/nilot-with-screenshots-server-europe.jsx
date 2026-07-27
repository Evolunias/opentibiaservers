import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-screenshots-server-europe');
}

export default function NilotWithScreenshotsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-screenshots-server-europe" />;
}

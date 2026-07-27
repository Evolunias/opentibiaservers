import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-with-screenshots-server-europe');
}

export default function ImperianicWithScreenshotsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="imperianic-with-screenshots-server-europe" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-with-screenshots-server-poland');
}

export default function ImperianicWithScreenshotsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="imperianic-with-screenshots-server-poland" />;
}

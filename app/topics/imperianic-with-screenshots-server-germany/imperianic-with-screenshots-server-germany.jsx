import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-with-screenshots-server-germany');
}

export default function ImperianicWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="imperianic-with-screenshots-server-germany" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-with-screenshots-server-north-america');
}

export default function ImperianicWithScreenshotsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-with-screenshots-server-north-america" />;
}

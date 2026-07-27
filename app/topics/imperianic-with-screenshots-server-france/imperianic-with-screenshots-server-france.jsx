import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-with-screenshots-server-france');
}

export default function ImperianicWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="imperianic-with-screenshots-server-france" />;
}

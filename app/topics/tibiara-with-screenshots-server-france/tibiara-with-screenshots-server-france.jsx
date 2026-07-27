import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-screenshots-server-france');
}

export default function TibiaraWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-screenshots-server-france" />;
}

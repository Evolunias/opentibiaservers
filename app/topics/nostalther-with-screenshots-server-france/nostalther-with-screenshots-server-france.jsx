import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-with-screenshots-server-france');
}

export default function NostaltherWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nostalther-with-screenshots-server-france" />;
}

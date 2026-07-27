import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-with-screenshots-server-france');
}

export default function TibiantisWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-with-screenshots-server-france" />;
}

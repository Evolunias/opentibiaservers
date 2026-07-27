import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-screenshots-server-france');
}

export default function AlasteraWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-screenshots-server-france" />;
}

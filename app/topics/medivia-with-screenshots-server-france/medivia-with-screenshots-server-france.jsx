import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-screenshots-server-france');
}

export default function MediviaWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-screenshots-server-france" />;
}

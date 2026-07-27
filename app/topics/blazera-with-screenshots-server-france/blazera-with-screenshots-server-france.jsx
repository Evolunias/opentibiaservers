import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-screenshots-server-france');
}

export default function BlazeraWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-screenshots-server-france" />;
}

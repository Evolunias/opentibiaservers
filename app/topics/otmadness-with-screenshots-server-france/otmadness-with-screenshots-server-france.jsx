import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-screenshots-server-france');
}

export default function OtmadnessWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-screenshots-server-france" />;
}

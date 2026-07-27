import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-screenshots-server-uk');
}

export default function OtmadnessWithScreenshotsServerUkKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-screenshots-server-uk" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-screenshots-server-poland');
}

export default function OtmadnessWithScreenshotsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-screenshots-server-poland" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-screenshots-server-germany');
}

export default function OtmadnessWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-screenshots-server-germany" />;
}

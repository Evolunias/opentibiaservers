import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-screenshots-server-europe');
}

export default function OtmadnessWithScreenshotsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-screenshots-server-europe" />;
}

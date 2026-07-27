import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-screenshots-server-usa');
}

export default function OtmadnessWithScreenshotsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-screenshots-server-usa" />;
}

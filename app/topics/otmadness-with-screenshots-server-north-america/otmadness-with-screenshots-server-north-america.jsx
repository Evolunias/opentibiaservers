import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-screenshots-server-north-america');
}

export default function OtmadnessWithScreenshotsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-screenshots-server-north-america" />;
}

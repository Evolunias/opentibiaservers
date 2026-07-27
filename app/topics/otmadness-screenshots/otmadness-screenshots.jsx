import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-screenshots');
}

export default function OtmadnessScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="otmadness-screenshots" />;
}

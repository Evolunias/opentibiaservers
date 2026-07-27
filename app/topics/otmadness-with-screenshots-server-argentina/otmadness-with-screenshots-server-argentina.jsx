import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-screenshots-server-argentina');
}

export default function OtmadnessWithScreenshotsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-screenshots-server-argentina" />;
}

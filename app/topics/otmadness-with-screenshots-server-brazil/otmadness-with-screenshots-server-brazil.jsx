import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-screenshots-server-brazil');
}

export default function OtmadnessWithScreenshotsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-screenshots-server-brazil" />;
}

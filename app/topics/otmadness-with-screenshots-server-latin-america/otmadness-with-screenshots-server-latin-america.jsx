import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-screenshots-server-latin-america');
}

export default function OtmadnessWithScreenshotsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-screenshots-server-latin-america" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-screenshots-server-sweden');
}

export default function OtmadnessWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-screenshots-server-sweden" />;
}

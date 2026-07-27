import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-screenshots');
}

export default function MadnessaliveScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-screenshots" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-with-screenshots-server-sweden');
}

export default function MadnessaliveWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-with-screenshots-server-sweden" />;
}

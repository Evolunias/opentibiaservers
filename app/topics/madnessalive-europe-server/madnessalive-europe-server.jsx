import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-europe-server');
}

export default function MadnessaliveEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-europe-server" />;
}

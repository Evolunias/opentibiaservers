import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-europe-servers');
}

export default function MadnessaliveEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-europe-servers" />;
}

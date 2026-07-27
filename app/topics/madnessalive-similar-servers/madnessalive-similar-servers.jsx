import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-similar-servers');
}

export default function MadnessaliveSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-similar-servers" />;
}

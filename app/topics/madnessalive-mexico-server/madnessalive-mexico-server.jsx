import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-mexico-server');
}

export default function MadnessaliveMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-mexico-server" />;
}

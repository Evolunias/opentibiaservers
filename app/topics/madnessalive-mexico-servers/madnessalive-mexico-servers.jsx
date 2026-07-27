import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-mexico-servers');
}

export default function MadnessaliveMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-mexico-servers" />;
}

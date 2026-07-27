import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-fresh-start-server-sweden');
}

export default function MadnessaliveFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-fresh-start-server-sweden" />;
}

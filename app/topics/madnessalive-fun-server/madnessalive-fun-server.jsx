import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-fun-server');
}

export default function MadnessaliveFunServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-fun-server" />;
}

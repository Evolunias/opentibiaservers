import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-sweden-server');
}

export default function MadnessaliveSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-sweden-server" />;
}

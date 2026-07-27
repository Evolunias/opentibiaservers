import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-brazil-server');
}

export default function MadnessaliveBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-brazil-server" />;
}

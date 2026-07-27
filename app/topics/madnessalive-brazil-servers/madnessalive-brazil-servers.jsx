import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-brazil-servers');
}

export default function MadnessaliveBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-brazil-servers" />;
}

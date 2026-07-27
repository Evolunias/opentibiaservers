import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-pvp-server-brazil');
}

export default function MadnessalivePvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-pvp-server-brazil" />;
}

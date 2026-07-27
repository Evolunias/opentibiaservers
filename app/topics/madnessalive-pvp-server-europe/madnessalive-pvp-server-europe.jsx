import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-pvp-server-europe');
}

export default function MadnessalivePvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-pvp-server-europe" />;
}

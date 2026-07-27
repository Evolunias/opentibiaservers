import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-fresh-start-server-europe');
}

export default function MadnessaliveFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-fresh-start-server-europe" />;
}

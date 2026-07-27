import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-fresh-start-server-uk');
}

export default function MadnessaliveFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-fresh-start-server-uk" />;
}

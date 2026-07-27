import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-fresh-start-server-poland');
}

export default function MadnessaliveFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-fresh-start-server-poland" />;
}

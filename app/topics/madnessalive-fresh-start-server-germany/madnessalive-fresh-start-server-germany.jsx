import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-fresh-start-server-germany');
}

export default function MadnessaliveFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-fresh-start-server-germany" />;
}

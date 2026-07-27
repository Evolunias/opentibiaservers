import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-low-exp-server-europe');
}

export default function MadnessaliveLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-low-exp-server-europe" />;
}

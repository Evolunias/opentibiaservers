import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-low-exp-server-europe');
}

export default function RubinotLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="rubinot-low-exp-server-europe" />;
}

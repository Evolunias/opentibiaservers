import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-high-exp-server-europe');
}

export default function NilotHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nilot-high-exp-server-europe" />;
}

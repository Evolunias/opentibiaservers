import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-low-exp-server-europe');
}

export default function NilotLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nilot-low-exp-server-europe" />;
}

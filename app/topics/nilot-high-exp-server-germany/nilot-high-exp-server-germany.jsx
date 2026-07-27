import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-high-exp-server-germany');
}

export default function NilotHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nilot-high-exp-server-germany" />;
}

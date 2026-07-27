import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-low-exp-server-germany');
}

export default function NilotLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nilot-low-exp-server-germany" />;
}

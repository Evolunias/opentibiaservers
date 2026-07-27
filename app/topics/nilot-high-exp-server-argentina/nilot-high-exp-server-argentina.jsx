import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-high-exp-server-argentina');
}

export default function NilotHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nilot-high-exp-server-argentina" />;
}

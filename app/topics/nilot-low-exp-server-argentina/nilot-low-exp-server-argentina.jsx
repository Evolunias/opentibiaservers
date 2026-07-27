import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-low-exp-server-argentina');
}

export default function NilotLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nilot-low-exp-server-argentina" />;
}

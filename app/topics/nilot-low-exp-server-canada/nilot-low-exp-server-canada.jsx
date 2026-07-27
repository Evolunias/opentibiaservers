import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-low-exp-server-canada');
}

export default function NilotLowExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="nilot-low-exp-server-canada" />;
}

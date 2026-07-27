import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-high-exp-server-canada');
}

export default function NilotHighExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="nilot-high-exp-server-canada" />;
}

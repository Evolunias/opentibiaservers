import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-8-6-high-exp-server');
}

export default function Nilot86HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-8-6-high-exp-server" />;
}

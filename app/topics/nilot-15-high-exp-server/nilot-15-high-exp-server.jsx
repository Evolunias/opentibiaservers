import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-15-high-exp-server');
}

export default function Nilot15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-15-high-exp-server" />;
}

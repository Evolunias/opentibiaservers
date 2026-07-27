import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-14-high-exp-server');
}

export default function Nilot14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-14-high-exp-server" />;
}

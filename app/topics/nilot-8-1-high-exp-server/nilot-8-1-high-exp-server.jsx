import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-8-1-high-exp-server');
}

export default function Nilot81HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-8-1-high-exp-server" />;
}

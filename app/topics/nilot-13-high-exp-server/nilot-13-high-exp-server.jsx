import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-13-high-exp-server');
}

export default function Nilot13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-13-high-exp-server" />;
}

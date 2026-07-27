import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-12-high-exp-server');
}

export default function Nilot12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-12-high-exp-server" />;
}

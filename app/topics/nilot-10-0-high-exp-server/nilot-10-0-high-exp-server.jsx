import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-10-0-high-exp-server');
}

export default function Nilot100HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-10-0-high-exp-server" />;
}

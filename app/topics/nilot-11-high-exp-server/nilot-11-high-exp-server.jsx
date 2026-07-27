import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-11-high-exp-server');
}

export default function Nilot11HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-11-high-exp-server" />;
}

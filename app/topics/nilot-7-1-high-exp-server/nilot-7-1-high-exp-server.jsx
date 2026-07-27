import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-7-1-high-exp-server');
}

export default function Nilot71HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-7-1-high-exp-server" />;
}

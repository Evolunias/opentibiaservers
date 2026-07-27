import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-8-6-low-exp-server');
}

export default function Nilot86LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-8-6-low-exp-server" />;
}

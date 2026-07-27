import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-15-low-exp-server');
}

export default function Nilot15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-15-low-exp-server" />;
}

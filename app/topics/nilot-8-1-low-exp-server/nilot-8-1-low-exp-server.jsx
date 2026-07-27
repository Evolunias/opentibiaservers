import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-8-1-low-exp-server');
}

export default function Nilot81LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-8-1-low-exp-server" />;
}

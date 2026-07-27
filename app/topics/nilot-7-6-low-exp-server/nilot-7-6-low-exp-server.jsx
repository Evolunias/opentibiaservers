import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-7-6-low-exp-server');
}

export default function Nilot76LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-7-6-low-exp-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-14-low-exp-server');
}

export default function Nilot14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-14-low-exp-server" />;
}

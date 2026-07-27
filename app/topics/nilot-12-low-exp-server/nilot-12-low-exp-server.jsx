import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-12-low-exp-server');
}

export default function Nilot12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-12-low-exp-server" />;
}

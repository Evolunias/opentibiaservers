import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-10-0-low-exp-server');
}

export default function Nilot100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-10-0-low-exp-server" />;
}

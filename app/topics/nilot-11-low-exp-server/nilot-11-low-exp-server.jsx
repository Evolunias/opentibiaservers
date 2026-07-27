import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-11-low-exp-server');
}

export default function Nilot11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-11-low-exp-server" />;
}

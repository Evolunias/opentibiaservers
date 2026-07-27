import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-xanteria-server');
}

export default function LowExpXanteriaServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-xanteria-server" />;
}

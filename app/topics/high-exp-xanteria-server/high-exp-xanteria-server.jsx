import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-xanteria-server');
}

export default function HighExpXanteriaServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-xanteria-server" />;
}

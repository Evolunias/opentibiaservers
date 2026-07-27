import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-6-high-exp-server');
}

export default function Cyntara86HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-6-high-exp-server" />;
}

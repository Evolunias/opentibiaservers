import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-7-4-high-exp-server');
}

export default function Cyntara74HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-7-4-high-exp-server" />;
}

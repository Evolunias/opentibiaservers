import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-9-6-high-exp-server');
}

export default function Cyntara96HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-9-6-high-exp-server" />;
}

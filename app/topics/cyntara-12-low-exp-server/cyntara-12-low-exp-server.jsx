import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-12-low-exp-server');
}

export default function Cyntara12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-12-low-exp-server" />;
}

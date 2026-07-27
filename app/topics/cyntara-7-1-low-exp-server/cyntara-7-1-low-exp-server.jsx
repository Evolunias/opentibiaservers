import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-7-1-low-exp-server');
}

export default function Cyntara71LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-7-1-low-exp-server" />;
}

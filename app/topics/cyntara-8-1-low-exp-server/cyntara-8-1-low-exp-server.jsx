import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-1-low-exp-server');
}

export default function Cyntara81LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-1-low-exp-server" />;
}

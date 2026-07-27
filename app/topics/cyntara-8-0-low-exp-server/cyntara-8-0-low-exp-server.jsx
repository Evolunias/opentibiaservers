import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-0-low-exp-server');
}

export default function Cyntara80LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-0-low-exp-server" />;
}

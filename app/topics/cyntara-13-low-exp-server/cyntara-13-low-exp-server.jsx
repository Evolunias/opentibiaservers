import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-13-low-exp-server');
}

export default function Cyntara13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-13-low-exp-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-11-low-exp-server');
}

export default function Cyntara11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-11-low-exp-server" />;
}

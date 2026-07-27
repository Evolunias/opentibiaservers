import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-14-low-exp-server');
}

export default function Cyntara14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-14-low-exp-server" />;
}

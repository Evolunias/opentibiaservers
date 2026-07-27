import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-10-0-low-exp-server');
}

export default function Cyntara100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-10-0-low-exp-server" />;
}

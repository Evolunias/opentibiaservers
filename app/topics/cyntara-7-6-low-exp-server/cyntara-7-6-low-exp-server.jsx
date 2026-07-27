import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-7-6-low-exp-server');
}

export default function Cyntara76LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-7-6-low-exp-server" />;
}

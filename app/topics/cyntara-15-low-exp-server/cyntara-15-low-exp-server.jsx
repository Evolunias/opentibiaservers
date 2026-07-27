import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-15-low-exp-server');
}

export default function Cyntara15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-15-low-exp-server" />;
}

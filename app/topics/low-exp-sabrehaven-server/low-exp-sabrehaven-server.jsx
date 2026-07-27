import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-sabrehaven-server');
}

export default function LowExpSabrehavenServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-sabrehaven-server" />;
}

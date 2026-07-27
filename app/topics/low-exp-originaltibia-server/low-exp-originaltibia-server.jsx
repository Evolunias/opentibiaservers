import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-originaltibia-server');
}

export default function LowExpOriginaltibiaServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-originaltibia-server" />;
}

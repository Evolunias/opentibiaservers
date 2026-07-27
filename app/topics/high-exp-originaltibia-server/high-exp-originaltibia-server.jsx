import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-originaltibia-server');
}

export default function HighExpOriginaltibiaServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-originaltibia-server" />;
}

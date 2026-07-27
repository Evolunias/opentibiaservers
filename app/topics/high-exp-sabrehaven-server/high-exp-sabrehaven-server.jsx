import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-sabrehaven-server');
}

export default function HighExpSabrehavenServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-sabrehaven-server" />;
}

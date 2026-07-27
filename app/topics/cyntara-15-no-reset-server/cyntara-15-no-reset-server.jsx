import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-15-no-reset-server');
}

export default function Cyntara15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-15-no-reset-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-6-no-reset-server');
}

export default function Cyntara86NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-6-no-reset-server" />;
}

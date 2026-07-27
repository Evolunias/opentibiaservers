import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-11-no-reset-server');
}

export default function Cyntara11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-11-no-reset-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-12-no-reset-server');
}

export default function Cyntara12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-12-no-reset-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-14-no-reset-server');
}

export default function Cyntara14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-14-no-reset-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-7-72-no-reset-server');
}

export default function Cyntara772NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-7-72-no-reset-server" />;
}

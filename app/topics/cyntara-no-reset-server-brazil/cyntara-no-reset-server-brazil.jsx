import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-no-reset-server-brazil');
}

export default function CyntaraNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="cyntara-no-reset-server-brazil" />;
}

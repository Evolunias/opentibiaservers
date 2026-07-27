import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-no-reset-server-germany');
}

export default function CyntaraNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="cyntara-no-reset-server-germany" />;
}

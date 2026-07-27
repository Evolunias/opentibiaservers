import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-no-reset-server-uk');
}

export default function CyntaraNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="cyntara-no-reset-server-uk" />;
}

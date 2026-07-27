import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-no-reset-server-europe');
}

export default function CyntaraNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="cyntara-no-reset-server-europe" />;
}

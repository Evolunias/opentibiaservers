import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-no-reset-server-poland');
}

export default function CyntaraNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="cyntara-no-reset-server-poland" />;
}

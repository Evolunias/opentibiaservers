import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-fresh-start-server-usa');
}

export default function CyntaraFreshStartServerUsaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-fresh-start-server-usa" />;
}

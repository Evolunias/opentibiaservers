import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-fresh-start-server-argentina');
}

export default function CyntaraFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-fresh-start-server-argentina" />;
}

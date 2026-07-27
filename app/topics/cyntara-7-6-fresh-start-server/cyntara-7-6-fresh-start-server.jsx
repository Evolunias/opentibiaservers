import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-7-6-fresh-start-server');
}

export default function Cyntara76FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-7-6-fresh-start-server" />;
}

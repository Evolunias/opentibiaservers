import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-7-4-fresh-start-server');
}

export default function Cyntara74FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-7-4-fresh-start-server" />;
}

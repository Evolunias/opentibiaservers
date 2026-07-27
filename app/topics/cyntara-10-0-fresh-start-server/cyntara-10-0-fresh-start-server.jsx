import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-10-0-fresh-start-server');
}

export default function Cyntara100FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-10-0-fresh-start-server" />;
}

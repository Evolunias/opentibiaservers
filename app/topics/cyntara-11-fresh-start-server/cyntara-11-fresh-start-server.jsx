import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-11-fresh-start-server');
}

export default function Cyntara11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-11-fresh-start-server" />;
}

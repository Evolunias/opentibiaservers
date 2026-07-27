import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-12-fresh-start-server');
}

export default function Cyntara12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-12-fresh-start-server" />;
}

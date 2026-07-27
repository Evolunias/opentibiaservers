import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-14-fresh-start-server');
}

export default function Cyntara14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-14-fresh-start-server" />;
}

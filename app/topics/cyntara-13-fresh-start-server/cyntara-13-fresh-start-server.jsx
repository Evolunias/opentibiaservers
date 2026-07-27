import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-13-fresh-start-server');
}

export default function Cyntara13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-13-fresh-start-server" />;
}

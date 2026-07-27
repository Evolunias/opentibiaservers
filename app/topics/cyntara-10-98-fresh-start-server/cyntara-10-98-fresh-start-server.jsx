import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-10-98-fresh-start-server');
}

export default function Cyntara1098FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-10-98-fresh-start-server" />;
}

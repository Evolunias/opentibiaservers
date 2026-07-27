import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-7-72-fresh-start-server');
}

export default function Cyntara772FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-7-72-fresh-start-server" />;
}

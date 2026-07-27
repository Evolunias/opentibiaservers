import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-9-6-fresh-start-server');
}

export default function Cyntara96FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-9-6-fresh-start-server" />;
}

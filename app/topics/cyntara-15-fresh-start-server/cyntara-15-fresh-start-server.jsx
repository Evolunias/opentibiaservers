import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-15-fresh-start-server');
}

export default function Cyntara15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-15-fresh-start-server" />;
}

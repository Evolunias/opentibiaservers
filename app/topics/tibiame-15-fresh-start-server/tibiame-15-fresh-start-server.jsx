import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-15-fresh-start-server');
}

export default function Tibiame15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-15-fresh-start-server" />;
}

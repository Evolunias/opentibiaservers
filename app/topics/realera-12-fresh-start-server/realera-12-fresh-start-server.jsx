import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-12-fresh-start-server');
}

export default function Realera12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="realera-12-fresh-start-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-0-fresh-start-server');
}

export default function Realera80FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="realera-8-0-fresh-start-server" />;
}

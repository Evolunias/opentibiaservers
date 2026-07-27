import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-13-fresh-start-server');
}

export default function Realera13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="realera-13-fresh-start-server" />;
}

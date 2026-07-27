import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-1-fresh-start-server');
}

export default function Realera71FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-1-fresh-start-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-4-fresh-start-server');
}

export default function Realera74FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-4-fresh-start-server" />;
}

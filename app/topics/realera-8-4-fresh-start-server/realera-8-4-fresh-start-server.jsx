import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-4-fresh-start-server');
}

export default function Realera84FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="realera-8-4-fresh-start-server" />;
}

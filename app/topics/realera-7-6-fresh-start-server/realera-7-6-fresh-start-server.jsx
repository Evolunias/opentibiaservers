import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-6-fresh-start-server');
}

export default function Realera76FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-6-fresh-start-server" />;
}

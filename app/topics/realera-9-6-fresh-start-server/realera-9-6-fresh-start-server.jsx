import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-9-6-fresh-start-server');
}

export default function Realera96FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="realera-9-6-fresh-start-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-14-fresh-start-server');
}

export default function Realera14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="realera-14-fresh-start-server" />;
}

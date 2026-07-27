import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-10-0-fresh-start-server');
}

export default function Realera100FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="realera-10-0-fresh-start-server" />;
}

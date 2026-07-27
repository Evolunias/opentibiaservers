import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-8-1-fresh-start-server');
}

export default function Nostalther81FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-8-1-fresh-start-server" />;
}

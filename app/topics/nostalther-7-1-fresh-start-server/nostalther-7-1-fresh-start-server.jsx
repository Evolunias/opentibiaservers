import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-7-1-fresh-start-server');
}

export default function Nostalther71FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-7-1-fresh-start-server" />;
}

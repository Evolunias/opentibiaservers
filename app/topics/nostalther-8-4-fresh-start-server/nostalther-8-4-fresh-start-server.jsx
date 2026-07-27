import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-8-4-fresh-start-server');
}

export default function Nostalther84FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-8-4-fresh-start-server" />;
}

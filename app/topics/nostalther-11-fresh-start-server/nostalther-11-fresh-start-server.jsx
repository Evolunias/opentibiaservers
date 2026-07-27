import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-11-fresh-start-server');
}

export default function Nostalther11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-11-fresh-start-server" />;
}

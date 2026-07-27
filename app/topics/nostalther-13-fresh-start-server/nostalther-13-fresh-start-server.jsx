import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-13-fresh-start-server');
}

export default function Nostalther13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-13-fresh-start-server" />;
}

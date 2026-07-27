import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-12-fresh-start-server');
}

export default function Nostalther12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-12-fresh-start-server" />;
}

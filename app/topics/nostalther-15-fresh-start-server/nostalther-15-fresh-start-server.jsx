import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-15-fresh-start-server');
}

export default function Nostalther15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-15-fresh-start-server" />;
}

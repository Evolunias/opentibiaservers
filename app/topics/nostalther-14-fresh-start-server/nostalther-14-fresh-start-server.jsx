import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-14-fresh-start-server');
}

export default function Nostalther14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-14-fresh-start-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-9-6-fresh-start-server');
}

export default function Nostalther96FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-9-6-fresh-start-server" />;
}

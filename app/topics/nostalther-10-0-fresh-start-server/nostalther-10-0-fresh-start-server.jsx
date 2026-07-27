import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-10-0-fresh-start-server');
}

export default function Nostalther100FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-10-0-fresh-start-server" />;
}

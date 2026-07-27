import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-0-fresh-start-server');
}

export default function Blazera80FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-0-fresh-start-server" />;
}

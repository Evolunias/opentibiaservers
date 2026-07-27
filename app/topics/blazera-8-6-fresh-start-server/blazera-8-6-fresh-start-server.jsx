import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-6-fresh-start-server');
}

export default function Blazera86FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-6-fresh-start-server" />;
}

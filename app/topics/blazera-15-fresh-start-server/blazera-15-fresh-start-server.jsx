import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-15-fresh-start-server');
}

export default function Blazera15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-15-fresh-start-server" />;
}

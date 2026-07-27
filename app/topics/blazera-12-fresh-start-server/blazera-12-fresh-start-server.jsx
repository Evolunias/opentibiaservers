import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-12-fresh-start-server');
}

export default function Blazera12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-12-fresh-start-server" />;
}

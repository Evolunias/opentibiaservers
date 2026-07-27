import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-15-fresh-start-server');
}

export default function Saintsot15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-15-fresh-start-server" />;
}

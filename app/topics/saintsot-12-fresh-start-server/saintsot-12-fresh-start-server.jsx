import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-12-fresh-start-server');
}

export default function Saintsot12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-12-fresh-start-server" />;
}

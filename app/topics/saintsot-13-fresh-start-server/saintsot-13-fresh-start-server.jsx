import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-13-fresh-start-server');
}

export default function Saintsot13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-13-fresh-start-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-8-0-fresh-start-server');
}

export default function Saintsot80FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-8-0-fresh-start-server" />;
}

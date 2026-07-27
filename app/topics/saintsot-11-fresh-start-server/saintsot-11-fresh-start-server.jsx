import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-11-fresh-start-server');
}

export default function Saintsot11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-11-fresh-start-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-14-fresh-start-server');
}

export default function Saintsot14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-14-fresh-start-server" />;
}

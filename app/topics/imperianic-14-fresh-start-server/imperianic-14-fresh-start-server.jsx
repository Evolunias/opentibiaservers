import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-14-fresh-start-server');
}

export default function Imperianic14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-14-fresh-start-server" />;
}

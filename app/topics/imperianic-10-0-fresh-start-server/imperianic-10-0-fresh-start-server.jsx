import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-10-0-fresh-start-server');
}

export default function Imperianic100FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-10-0-fresh-start-server" />;
}

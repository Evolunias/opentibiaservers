import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-11-fresh-start-server');
}

export default function Imperianic11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-11-fresh-start-server" />;
}

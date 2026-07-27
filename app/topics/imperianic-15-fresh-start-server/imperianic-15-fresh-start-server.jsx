import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-15-fresh-start-server');
}

export default function Imperianic15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-15-fresh-start-server" />;
}

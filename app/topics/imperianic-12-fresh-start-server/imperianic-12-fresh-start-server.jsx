import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-12-fresh-start-server');
}

export default function Imperianic12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-12-fresh-start-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-8-1-fresh-start-server');
}

export default function Imperianic81FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-8-1-fresh-start-server" />;
}

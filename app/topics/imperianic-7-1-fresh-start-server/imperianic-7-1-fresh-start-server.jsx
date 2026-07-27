import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-7-1-fresh-start-server');
}

export default function Imperianic71FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-7-1-fresh-start-server" />;
}

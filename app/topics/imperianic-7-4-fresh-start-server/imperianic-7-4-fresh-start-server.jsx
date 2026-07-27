import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-7-4-fresh-start-server');
}

export default function Imperianic74FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-7-4-fresh-start-server" />;
}

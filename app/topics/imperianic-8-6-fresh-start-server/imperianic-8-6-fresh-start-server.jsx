import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-8-6-fresh-start-server');
}

export default function Imperianic86FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-8-6-fresh-start-server" />;
}

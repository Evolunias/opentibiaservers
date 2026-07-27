import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-8-4-fresh-start-server');
}

export default function Imperianic84FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-8-4-fresh-start-server" />;
}

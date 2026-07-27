import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-13-fresh-start-server');
}

export default function Imperianic13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-13-fresh-start-server" />;
}

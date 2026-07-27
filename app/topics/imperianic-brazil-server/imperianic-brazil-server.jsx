import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-brazil-server');
}

export default function ImperianicBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-brazil-server" />;
}

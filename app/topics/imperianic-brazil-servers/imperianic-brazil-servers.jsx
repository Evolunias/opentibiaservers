import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-brazil-servers');
}

export default function ImperianicBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="imperianic-brazil-servers" />;
}

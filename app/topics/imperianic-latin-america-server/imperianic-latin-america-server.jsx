import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-latin-america-server');
}

export default function ImperianicLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-latin-america-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-latin-america-servers');
}

export default function ImperianicLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="imperianic-latin-america-servers" />;
}

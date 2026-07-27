import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-latin-america-servers');
}

export default function NostaltherLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="nostalther-latin-america-servers" />;
}

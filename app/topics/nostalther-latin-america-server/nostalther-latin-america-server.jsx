import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-latin-america-server');
}

export default function NostaltherLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-latin-america-server" />;
}

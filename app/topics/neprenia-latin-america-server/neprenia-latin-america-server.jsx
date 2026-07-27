import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-latin-america-server');
}

export default function NepreniaLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-latin-america-server" />;
}

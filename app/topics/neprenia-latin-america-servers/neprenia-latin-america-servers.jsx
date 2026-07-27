import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-latin-america-servers');
}

export default function NepreniaLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="neprenia-latin-america-servers" />;
}

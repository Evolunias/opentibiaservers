import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-baiak-server-latin-america');
}

export default function TibiascapeBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-baiak-server-latin-america" />;
}

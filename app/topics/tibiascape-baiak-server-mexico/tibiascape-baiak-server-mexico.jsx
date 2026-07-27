import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-baiak-server-mexico');
}

export default function TibiascapeBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-baiak-server-mexico" />;
}

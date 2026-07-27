import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-baiak-server-usa');
}

export default function TibiascapeBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-baiak-server-usa" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-baiak-server-argentina');
}

export default function TibiascapeBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-baiak-server-argentina" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-baiak-server-brazil');
}

export default function TibiascapeBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-baiak-server-brazil" />;
}

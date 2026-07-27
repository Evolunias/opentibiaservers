import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-baiak-server-north-america');
}

export default function TibiascapeBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-baiak-server-north-america" />;
}

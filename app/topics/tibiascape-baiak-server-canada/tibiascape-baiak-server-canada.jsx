import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-baiak-server-canada');
}

export default function TibiascapeBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-baiak-server-canada" />;
}

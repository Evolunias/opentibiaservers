import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-baiak-server-europe');
}

export default function TibiascapeBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-baiak-server-europe" />;
}

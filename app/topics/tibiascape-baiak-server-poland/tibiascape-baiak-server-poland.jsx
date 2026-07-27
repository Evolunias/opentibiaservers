import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-baiak-server-poland');
}

export default function TibiascapeBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-baiak-server-poland" />;
}

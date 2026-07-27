import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-baiak-server-germany');
}

export default function TibiascapeBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-baiak-server-germany" />;
}

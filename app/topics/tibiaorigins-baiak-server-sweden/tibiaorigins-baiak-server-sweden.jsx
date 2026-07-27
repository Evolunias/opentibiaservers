import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-baiak-server-sweden');
}

export default function TibiaoriginsBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-baiak-server-sweden" />;
}

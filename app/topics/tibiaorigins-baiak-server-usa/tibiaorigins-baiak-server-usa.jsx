import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-baiak-server-usa');
}

export default function TibiaoriginsBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-baiak-server-usa" />;
}

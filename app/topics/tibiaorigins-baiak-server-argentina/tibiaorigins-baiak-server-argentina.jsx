import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-baiak-server-argentina');
}

export default function TibiaoriginsBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-baiak-server-argentina" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-baiak-server-poland');
}

export default function TibiaoriginsBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-baiak-server-poland" />;
}

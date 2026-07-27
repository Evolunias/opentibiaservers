import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-baiak-server-germany');
}

export default function TibiaoriginsBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-baiak-server-germany" />;
}

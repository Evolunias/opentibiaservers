import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-baiak-server-uk');
}

export default function TibiaoriginsBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-baiak-server-uk" />;
}

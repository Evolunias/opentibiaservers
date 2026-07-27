import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-baiak-server-europe');
}

export default function TibiaoriginsBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-baiak-server-europe" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-baiak-server-mexico');
}

export default function TibiaoriginsBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-baiak-server-mexico" />;
}

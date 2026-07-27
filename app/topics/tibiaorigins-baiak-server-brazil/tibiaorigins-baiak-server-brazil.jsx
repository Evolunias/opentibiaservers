import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-baiak-server-brazil');
}

export default function TibiaoriginsBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-baiak-server-brazil" />;
}

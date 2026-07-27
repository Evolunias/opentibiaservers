import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-baiak-server-north-america');
}

export default function TibiaoriginsBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-baiak-server-north-america" />;
}

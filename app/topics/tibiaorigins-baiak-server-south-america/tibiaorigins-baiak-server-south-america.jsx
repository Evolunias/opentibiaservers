import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-baiak-server-south-america');
}

export default function TibiaoriginsBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-baiak-server-south-america" />;
}

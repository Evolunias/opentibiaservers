import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-baiak-server-canada');
}

export default function TibiaoriginsBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-baiak-server-canada" />;
}

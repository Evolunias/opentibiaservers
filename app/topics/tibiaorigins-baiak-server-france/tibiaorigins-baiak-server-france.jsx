import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-baiak-server-france');
}

export default function TibiaoriginsBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-baiak-server-france" />;
}

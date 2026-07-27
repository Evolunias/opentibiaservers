import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-pvpe-server-poland');
}

export default function TibiaoriginsPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-pvpe-server-poland" />;
}

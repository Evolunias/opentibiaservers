import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-pvpe-server-germany');
}

export default function TibiaoriginsPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-pvpe-server-germany" />;
}

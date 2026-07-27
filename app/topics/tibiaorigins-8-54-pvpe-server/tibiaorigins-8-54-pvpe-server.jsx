import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-8-54-pvpe-server');
}

export default function Tibiaorigins854PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-8-54-pvpe-server" />;
}

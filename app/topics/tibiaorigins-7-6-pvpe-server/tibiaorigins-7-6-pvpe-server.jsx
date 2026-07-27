import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-7-6-pvpe-server');
}

export default function Tibiaorigins76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-7-6-pvpe-server" />;
}

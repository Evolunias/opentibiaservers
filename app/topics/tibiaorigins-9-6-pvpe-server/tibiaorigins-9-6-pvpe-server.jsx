import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-9-6-pvpe-server');
}

export default function Tibiaorigins96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-9-6-pvpe-server" />;
}

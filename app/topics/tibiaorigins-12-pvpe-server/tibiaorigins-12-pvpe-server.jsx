import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-12-pvpe-server');
}

export default function Tibiaorigins12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-12-pvpe-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-8-0-pvpe-server');
}

export default function Tibiaorigins80PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-8-0-pvpe-server" />;
}

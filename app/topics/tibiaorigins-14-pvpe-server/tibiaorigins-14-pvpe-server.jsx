import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-14-pvpe-server');
}

export default function Tibiaorigins14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-14-pvpe-server" />;
}

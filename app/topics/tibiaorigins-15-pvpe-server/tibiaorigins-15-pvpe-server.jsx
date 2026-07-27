import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-15-pvpe-server');
}

export default function Tibiaorigins15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-15-pvpe-server" />;
}

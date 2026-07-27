import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-10-98-pvpe-server');
}

export default function Tibiaorigins1098PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-10-98-pvpe-server" />;
}

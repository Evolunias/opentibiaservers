import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-8-4-pvpe-server');
}

export default function Tibiaorigins84PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-8-4-pvpe-server" />;
}

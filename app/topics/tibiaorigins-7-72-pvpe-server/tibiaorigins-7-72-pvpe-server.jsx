import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-7-72-pvpe-server');
}

export default function Tibiaorigins772PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-7-72-pvpe-server" />;
}

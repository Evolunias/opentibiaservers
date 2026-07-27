import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-7-4-pvpe-server');
}

export default function Tibiaorigins74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-7-4-pvpe-server" />;
}

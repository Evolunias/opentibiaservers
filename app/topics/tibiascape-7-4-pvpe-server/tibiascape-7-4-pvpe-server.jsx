import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-4-pvpe-server');
}

export default function Tibiascape74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-4-pvpe-server" />;
}

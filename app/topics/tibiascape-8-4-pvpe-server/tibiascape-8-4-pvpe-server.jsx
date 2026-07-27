import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-4-pvpe-server');
}

export default function Tibiascape84PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-4-pvpe-server" />;
}

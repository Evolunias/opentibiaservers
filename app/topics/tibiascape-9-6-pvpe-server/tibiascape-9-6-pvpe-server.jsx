import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-9-6-pvpe-server');
}

export default function Tibiascape96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-9-6-pvpe-server" />;
}

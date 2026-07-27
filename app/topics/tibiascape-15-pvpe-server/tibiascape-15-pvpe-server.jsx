import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-15-pvpe-server');
}

export default function Tibiascape15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-15-pvpe-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-1-pvpe-server');
}

export default function Tibiascape81PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-1-pvpe-server" />;
}

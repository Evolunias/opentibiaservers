import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-13-pvpe-server');
}

export default function Tibiascape13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-13-pvpe-server" />;
}

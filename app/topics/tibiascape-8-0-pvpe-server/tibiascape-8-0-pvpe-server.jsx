import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-0-pvpe-server');
}

export default function Tibiascape80PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-0-pvpe-server" />;
}

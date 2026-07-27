import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-14-pvpe-server');
}

export default function Tibiascape14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-14-pvpe-server" />;
}

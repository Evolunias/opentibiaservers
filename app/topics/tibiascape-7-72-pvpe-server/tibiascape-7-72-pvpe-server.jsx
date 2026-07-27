import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-72-pvpe-server');
}

export default function Tibiascape772PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-72-pvpe-server" />;
}

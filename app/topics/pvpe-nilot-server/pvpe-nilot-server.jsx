import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-nilot-server');
}

export default function PvpeNilotServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-nilot-server" />;
}

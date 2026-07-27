import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-nostalther-server');
}

export default function PvpeNostaltherServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-nostalther-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-10-98-pvpe-server');
}

export default function Nostalther1098PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-10-98-pvpe-server" />;
}

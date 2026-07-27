import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-8-0-pvpe-server');
}

export default function Unline80PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="unline-8-0-pvpe-server" />;
}

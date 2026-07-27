import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-8-1-pvpe-server');
}

export default function MistOfDeath81PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-8-1-pvpe-server" />;
}

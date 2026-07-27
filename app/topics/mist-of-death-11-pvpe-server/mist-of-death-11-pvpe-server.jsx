import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-11-pvpe-server');
}

export default function MistOfDeath11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-11-pvpe-server" />;
}

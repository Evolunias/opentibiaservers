import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-15-pvpe-server');
}

export default function MistOfDeath15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-15-pvpe-server" />;
}

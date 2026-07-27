import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-12-pvpe-server');
}

export default function MistOfDeath12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-12-pvpe-server" />;
}

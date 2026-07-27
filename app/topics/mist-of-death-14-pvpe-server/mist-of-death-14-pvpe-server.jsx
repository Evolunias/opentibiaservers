import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-14-pvpe-server');
}

export default function MistOfDeath14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-14-pvpe-server" />;
}

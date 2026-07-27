import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-13-pvpe-server');
}

export default function MistOfDeath13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-13-pvpe-server" />;
}

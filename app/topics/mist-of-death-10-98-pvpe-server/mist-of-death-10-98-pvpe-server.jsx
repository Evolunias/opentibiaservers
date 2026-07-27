import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-10-98-pvpe-server');
}

export default function MistOfDeath1098PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-10-98-pvpe-server" />;
}

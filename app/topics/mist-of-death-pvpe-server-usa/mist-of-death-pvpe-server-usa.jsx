import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-pvpe-server-usa');
}

export default function MistOfDeathPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-pvpe-server-usa" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-pvpe-server-argentina');
}

export default function MistOfDeathPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-pvpe-server-argentina" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-pvpe-server-canada');
}

export default function MistOfDeathPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-pvpe-server-canada" />;
}

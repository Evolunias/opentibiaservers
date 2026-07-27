import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-pvpe-server-germany');
}

export default function MistOfDeathPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-pvpe-server-germany" />;
}

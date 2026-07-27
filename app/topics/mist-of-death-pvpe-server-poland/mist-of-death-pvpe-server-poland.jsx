import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-pvpe-server-poland');
}

export default function MistOfDeathPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-pvpe-server-poland" />;
}

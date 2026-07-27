import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-pvpe-server-uk');
}

export default function MistOfDeathPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-pvpe-server-uk" />;
}

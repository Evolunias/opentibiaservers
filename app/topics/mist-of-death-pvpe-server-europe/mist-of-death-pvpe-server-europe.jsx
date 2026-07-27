import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-pvpe-server-europe');
}

export default function MistOfDeathPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-pvpe-server-europe" />;
}

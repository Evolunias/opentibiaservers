import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-retro-server-uk');
}

export default function MadnessaliveRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-retro-server-uk" />;
}

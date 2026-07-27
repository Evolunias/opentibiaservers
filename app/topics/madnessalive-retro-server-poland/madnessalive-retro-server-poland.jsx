import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-retro-server-poland');
}

export default function MadnessaliveRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-retro-server-poland" />;
}

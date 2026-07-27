import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-retro-server-germany');
}

export default function MadnessaliveRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-retro-server-germany" />;
}

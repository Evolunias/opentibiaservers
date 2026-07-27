import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-retro-server-canada');
}

export default function MadnessaliveRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-retro-server-canada" />;
}

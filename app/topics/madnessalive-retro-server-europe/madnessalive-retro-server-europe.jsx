import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-retro-server-europe');
}

export default function MadnessaliveRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-retro-server-europe" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-retro-server-brazil');
}

export default function MadnessaliveRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-retro-server-brazil" />;
}

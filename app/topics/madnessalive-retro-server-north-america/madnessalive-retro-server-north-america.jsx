import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-retro-server-north-america');
}

export default function MadnessaliveRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-retro-server-north-america" />;
}

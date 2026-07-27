import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-retro-server-latin-america');
}

export default function MadnessaliveRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-retro-server-latin-america" />;
}

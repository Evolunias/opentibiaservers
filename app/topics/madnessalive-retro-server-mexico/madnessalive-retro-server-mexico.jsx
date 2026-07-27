import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-retro-server-mexico');
}

export default function MadnessaliveRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-retro-server-mexico" />;
}

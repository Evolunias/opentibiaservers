import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-retro-server-argentina');
}

export default function MadnessaliveRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-retro-server-argentina" />;
}

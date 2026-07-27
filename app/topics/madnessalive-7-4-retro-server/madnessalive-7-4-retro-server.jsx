import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-7-4-retro-server');
}

export default function Madnessalive74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-7-4-retro-server" />;
}

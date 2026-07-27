import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-11-retro-server');
}

export default function Madnessalive11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-11-retro-server" />;
}

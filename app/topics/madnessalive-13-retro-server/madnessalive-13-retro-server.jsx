import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-13-retro-server');
}

export default function Madnessalive13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-13-retro-server" />;
}

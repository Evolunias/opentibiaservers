import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-7-1-retro-server');
}

export default function Madnessalive71RetroServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-7-1-retro-server" />;
}

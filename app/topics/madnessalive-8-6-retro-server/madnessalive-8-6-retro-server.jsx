import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-8-6-retro-server');
}

export default function Madnessalive86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-8-6-retro-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-15-retro-server');
}

export default function Madnessalive15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-15-retro-server" />;
}

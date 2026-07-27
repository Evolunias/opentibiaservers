import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-8-1-retro-server');
}

export default function Madnessalive81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-8-1-retro-server" />;
}

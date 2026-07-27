import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-12-retro-server');
}

export default function Madnessalive12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-12-retro-server" />;
}

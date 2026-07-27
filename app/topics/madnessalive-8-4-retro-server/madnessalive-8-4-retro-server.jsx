import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-8-4-retro-server');
}

export default function Madnessalive84RetroServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-8-4-retro-server" />;
}

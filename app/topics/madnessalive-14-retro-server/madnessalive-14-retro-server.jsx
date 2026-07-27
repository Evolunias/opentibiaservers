import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-14-retro-server');
}

export default function Madnessalive14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-14-retro-server" />;
}

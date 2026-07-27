import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-10-0-retro-server');
}

export default function Madnessalive100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-10-0-retro-server" />;
}

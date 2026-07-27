import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-9-6-retro-server');
}

export default function Thornia96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-9-6-retro-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-9-6-retro-server');
}

export default function Shadowcores96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-9-6-retro-server" />;
}

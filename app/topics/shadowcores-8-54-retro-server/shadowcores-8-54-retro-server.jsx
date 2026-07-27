import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-54-retro-server');
}

export default function Shadowcores854RetroServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-54-retro-server" />;
}

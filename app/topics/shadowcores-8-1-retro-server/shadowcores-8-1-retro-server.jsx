import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-1-retro-server');
}

export default function Shadowcores81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-1-retro-server" />;
}

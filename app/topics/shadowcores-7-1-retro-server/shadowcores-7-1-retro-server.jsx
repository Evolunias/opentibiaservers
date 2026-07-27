import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-1-retro-server');
}

export default function Shadowcores71RetroServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-1-retro-server" />;
}

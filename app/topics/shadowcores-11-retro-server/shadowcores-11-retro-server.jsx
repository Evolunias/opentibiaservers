import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-11-retro-server');
}

export default function Shadowcores11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-11-retro-server" />;
}

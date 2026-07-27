import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-4-retro-server');
}

export default function Shadowcores74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-4-retro-server" />;
}

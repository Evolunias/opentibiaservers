import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-15-retro-server');
}

export default function Shadowcores15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-15-retro-server" />;
}

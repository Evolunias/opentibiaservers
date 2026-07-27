import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-14-retro-server');
}

export default function Shadowcores14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-14-retro-server" />;
}

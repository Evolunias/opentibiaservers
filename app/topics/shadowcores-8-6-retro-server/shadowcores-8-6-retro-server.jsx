import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-6-retro-server');
}

export default function Shadowcores86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-6-retro-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-6-retro-server');
}

export default function Shadowcores76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-6-retro-server" />;
}

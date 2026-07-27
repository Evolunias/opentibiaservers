import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-4-retro-server');
}

export default function Shadowcores84RetroServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-4-retro-server" />;
}

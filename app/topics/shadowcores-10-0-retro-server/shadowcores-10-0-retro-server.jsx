import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-10-0-retro-server');
}

export default function Shadowcores100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-10-0-retro-server" />;
}

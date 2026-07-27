import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-7-1-retro-server');
}

export default function Unline71RetroServerKeywordPage() {
  return <StaticKeywordPage slug="unline-7-1-retro-server" />;
}

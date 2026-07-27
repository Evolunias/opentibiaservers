import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-13-retro-server');
}

export default function Unline13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="unline-13-retro-server" />;
}

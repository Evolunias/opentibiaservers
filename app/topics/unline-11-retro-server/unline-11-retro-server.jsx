import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-11-retro-server');
}

export default function Unline11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="unline-11-retro-server" />;
}

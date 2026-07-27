import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-7-4-retro-server');
}

export default function Unline74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="unline-7-4-retro-server" />;
}

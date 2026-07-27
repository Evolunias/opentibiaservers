import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-1-retro-server');
}

export default function Tibijka71RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-1-retro-server" />;
}

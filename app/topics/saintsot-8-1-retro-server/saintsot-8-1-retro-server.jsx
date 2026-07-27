import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-8-1-retro-server');
}

export default function Saintsot81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-8-1-retro-server" />;
}

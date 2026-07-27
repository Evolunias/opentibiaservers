import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-7-4-retro-server');
}

export default function Saintsot74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-7-4-retro-server" />;
}

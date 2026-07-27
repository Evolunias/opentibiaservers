import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-13-retro-server');
}

export default function Saintsot13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-13-retro-server" />;
}

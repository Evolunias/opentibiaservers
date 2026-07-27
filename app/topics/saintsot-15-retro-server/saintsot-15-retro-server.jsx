import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-15-retro-server');
}

export default function Saintsot15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-15-retro-server" />;
}

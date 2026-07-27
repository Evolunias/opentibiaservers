import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-8-4-retro-server');
}

export default function Saintsot84RetroServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-8-4-retro-server" />;
}

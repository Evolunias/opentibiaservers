import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-8-6-retro-server');
}

export default function Saintsot86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-8-6-retro-server" />;
}

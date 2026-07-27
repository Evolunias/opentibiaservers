import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-9-6-retro-server');
}

export default function Saintsot96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-9-6-retro-server" />;
}

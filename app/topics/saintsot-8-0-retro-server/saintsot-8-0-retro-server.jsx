import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-8-0-retro-server');
}

export default function Saintsot80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-8-0-retro-server" />;
}

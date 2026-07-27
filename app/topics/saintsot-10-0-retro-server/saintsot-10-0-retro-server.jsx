import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-10-0-retro-server');
}

export default function Saintsot100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-10-0-retro-server" />;
}

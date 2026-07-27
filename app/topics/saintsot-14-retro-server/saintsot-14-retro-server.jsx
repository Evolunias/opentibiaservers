import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-14-retro-server');
}

export default function Saintsot14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-14-retro-server" />;
}

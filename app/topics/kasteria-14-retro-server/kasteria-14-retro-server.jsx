import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-14-retro-server');
}

export default function Kasteria14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-14-retro-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-14-retro-server');
}

export default function Tibiantis14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-14-retro-server" />;
}

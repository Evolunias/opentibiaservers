import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-11-retro-server');
}

export default function Alastera11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-11-retro-server" />;
}

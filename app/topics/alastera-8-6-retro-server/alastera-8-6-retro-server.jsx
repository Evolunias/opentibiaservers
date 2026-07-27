import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-6-retro-server');
}

export default function Alastera86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-6-retro-server" />;
}

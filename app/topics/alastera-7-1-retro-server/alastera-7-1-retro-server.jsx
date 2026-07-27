import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-1-retro-server');
}

export default function Alastera71RetroServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-1-retro-server" />;
}

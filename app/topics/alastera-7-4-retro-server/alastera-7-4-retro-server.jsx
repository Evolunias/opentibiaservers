import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-4-retro-server');
}

export default function Alastera74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-4-retro-server" />;
}

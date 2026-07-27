import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-13-retro-server');
}

export default function Alastera13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-13-retro-server" />;
}

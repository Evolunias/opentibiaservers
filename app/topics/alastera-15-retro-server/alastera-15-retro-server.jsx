import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-15-retro-server');
}

export default function Alastera15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-15-retro-server" />;
}

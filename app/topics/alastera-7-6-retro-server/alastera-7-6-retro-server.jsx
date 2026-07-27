import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-6-retro-server');
}

export default function Alastera76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-6-retro-server" />;
}

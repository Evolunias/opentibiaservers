import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-0-retro-server');
}

export default function Alastera80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-0-retro-server" />;
}

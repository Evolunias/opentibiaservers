import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-9-6-retro-server');
}

export default function Alastera96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-9-6-retro-server" />;
}

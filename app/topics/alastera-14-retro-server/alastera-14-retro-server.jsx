import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-14-retro-server');
}

export default function Alastera14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-14-retro-server" />;
}

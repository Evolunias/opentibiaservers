import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-10-0-retro-server');
}

export default function Alastera100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-10-0-retro-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-72-retro-server');
}

export default function Neprenia772RetroServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-72-retro-server" />;
}

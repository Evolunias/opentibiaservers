import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-11-retro-server');
}

export default function Neprenia11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-11-retro-server" />;
}

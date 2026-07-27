import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-54-retro-server');
}

export default function Neprenia854RetroServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-54-retro-server" />;
}

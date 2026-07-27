import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-1-retro-server');
}

export default function Neprenia81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-1-retro-server" />;
}

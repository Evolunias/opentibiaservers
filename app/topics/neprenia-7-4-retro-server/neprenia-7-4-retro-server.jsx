import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-4-retro-server');
}

export default function Neprenia74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-4-retro-server" />;
}

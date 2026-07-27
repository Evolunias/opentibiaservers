import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-0-retro-server');
}

export default function Neprenia80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-0-retro-server" />;
}

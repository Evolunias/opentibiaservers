import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-6-retro-server');
}

export default function Neprenia86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-6-retro-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-13-retro-server');
}

export default function Neprenia13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-13-retro-server" />;
}

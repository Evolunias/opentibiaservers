import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-4-retro-server');
}

export default function Neprenia84RetroServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-4-retro-server" />;
}

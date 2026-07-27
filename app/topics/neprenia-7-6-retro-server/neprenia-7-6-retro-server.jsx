import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-6-retro-server');
}

export default function Neprenia76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-6-retro-server" />;
}

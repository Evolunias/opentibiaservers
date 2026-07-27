import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-10-98-retro-server');
}

export default function Neprenia1098RetroServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-10-98-retro-server" />;
}

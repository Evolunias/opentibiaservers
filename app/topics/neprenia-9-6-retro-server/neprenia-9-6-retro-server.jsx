import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-9-6-retro-server');
}

export default function Neprenia96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-9-6-retro-server" />;
}

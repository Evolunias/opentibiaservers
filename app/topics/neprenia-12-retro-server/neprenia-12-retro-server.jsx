import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-12-retro-server');
}

export default function Neprenia12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-12-retro-server" />;
}

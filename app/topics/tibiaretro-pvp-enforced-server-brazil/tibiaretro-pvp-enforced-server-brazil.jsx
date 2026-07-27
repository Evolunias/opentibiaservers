import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-pvp-enforced-server-brazil');
}

export default function TibiaretroPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-pvp-enforced-server-brazil" />;
}

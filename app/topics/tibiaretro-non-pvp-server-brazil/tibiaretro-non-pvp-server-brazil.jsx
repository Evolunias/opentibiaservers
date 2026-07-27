import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-non-pvp-server-brazil');
}

export default function TibiaretroNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-non-pvp-server-brazil" />;
}

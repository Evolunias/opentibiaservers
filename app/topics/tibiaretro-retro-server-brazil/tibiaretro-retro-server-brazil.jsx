import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-retro-server-brazil');
}

export default function TibiaretroRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-retro-server-brazil" />;
}

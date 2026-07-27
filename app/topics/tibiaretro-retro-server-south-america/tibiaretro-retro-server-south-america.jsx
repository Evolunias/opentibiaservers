import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-retro-server-south-america');
}

export default function TibiaretroRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-retro-server-south-america" />;
}

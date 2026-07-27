import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-official');
}

export default function TibiaretroOfficialKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-official" />;
}

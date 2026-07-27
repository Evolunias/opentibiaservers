import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-low-exp-server-france');
}

export default function TibiaretroLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-low-exp-server-france" />;
}

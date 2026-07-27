import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-low-exp-server-latin-america');
}

export default function TibiaretroLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-low-exp-server-latin-america" />;
}

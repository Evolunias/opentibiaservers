import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-high-exp-server-latin-america');
}

export default function TibiaretroHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-high-exp-server-latin-america" />;
}

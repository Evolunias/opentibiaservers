import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-low-exp-server-north-america');
}

export default function TibiaretroLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-low-exp-server-north-america" />;
}

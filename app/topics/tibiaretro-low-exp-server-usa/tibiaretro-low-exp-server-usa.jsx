import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-low-exp-server-usa');
}

export default function TibiaretroLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-low-exp-server-usa" />;
}

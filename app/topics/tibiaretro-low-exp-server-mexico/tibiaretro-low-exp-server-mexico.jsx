import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-low-exp-server-mexico');
}

export default function TibiaretroLowExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-low-exp-server-mexico" />;
}

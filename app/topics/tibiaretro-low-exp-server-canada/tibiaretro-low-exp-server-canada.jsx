import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-low-exp-server-canada');
}

export default function TibiaretroLowExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-low-exp-server-canada" />;
}

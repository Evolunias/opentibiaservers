import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-low-exp-server-argentina');
}

export default function TibiaretroLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-low-exp-server-argentina" />;
}

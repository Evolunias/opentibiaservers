import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-low-exp-server-poland');
}

export default function TibiaretroLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-low-exp-server-poland" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-low-exp-server-uk');
}

export default function TibiaretroLowExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-low-exp-server-uk" />;
}

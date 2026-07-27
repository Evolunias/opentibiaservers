import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-low-exp-server-europe');
}

export default function TibiaretroLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-low-exp-server-europe" />;
}

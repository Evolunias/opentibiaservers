import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-high-exp-server-poland');
}

export default function TibiaretroHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-high-exp-server-poland" />;
}

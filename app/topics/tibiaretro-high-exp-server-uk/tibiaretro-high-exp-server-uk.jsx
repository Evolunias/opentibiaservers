import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-high-exp-server-uk');
}

export default function TibiaretroHighExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-high-exp-server-uk" />;
}

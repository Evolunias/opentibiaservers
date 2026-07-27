import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-high-exp-server-europe');
}

export default function TibiaretroHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-high-exp-server-europe" />;
}

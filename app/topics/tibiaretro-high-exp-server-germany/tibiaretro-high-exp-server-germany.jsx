import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-high-exp-server-germany');
}

export default function TibiaretroHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-high-exp-server-germany" />;
}

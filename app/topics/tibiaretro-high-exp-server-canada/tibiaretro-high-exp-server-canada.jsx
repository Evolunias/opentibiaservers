import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-high-exp-server-canada');
}

export default function TibiaretroHighExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-high-exp-server-canada" />;
}

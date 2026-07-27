import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-high-exp-server-north-america');
}

export default function TibiaretroHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-high-exp-server-north-america" />;
}

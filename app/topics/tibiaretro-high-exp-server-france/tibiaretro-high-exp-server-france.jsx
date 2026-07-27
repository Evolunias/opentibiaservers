import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-high-exp-server-france');
}

export default function TibiaretroHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-high-exp-server-france" />;
}

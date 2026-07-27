import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-high-exp-server-mexico');
}

export default function TibiaretroHighExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-high-exp-server-mexico" />;
}

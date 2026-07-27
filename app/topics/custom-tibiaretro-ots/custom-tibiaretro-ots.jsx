import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiaretro-ots');
}

export default function CustomTibiaretroOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiaretro-ots" />;
}

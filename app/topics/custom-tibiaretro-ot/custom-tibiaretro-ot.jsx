import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiaretro-ot');
}

export default function CustomTibiaretroOtKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiaretro-ot" />;
}

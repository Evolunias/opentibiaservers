import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiaretro-ot');
}

export default function ActiveTibiaretroOtKeywordPage() {
  return <StaticKeywordPage slug="active-tibiaretro-ot" />;
}

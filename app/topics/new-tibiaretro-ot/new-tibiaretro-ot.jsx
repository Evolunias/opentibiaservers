import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiaretro-ot');
}

export default function NewTibiaretroOtKeywordPage() {
  return <StaticKeywordPage slug="new-tibiaretro-ot" />;
}

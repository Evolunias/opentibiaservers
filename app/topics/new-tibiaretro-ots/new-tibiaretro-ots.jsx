import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiaretro-ots');
}

export default function NewTibiaretroOtsKeywordPage() {
  return <StaticKeywordPage slug="new-tibiaretro-ots" />;
}

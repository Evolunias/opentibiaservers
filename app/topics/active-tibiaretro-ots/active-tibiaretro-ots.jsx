import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiaretro-ots');
}

export default function ActiveTibiaretroOtsKeywordPage() {
  return <StaticKeywordPage slug="active-tibiaretro-ots" />;
}

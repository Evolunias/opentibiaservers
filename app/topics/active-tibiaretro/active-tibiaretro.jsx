import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiaretro');
}

export default function ActiveTibiaretroKeywordPage() {
  return <StaticKeywordPage slug="active-tibiaretro" />;
}

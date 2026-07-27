import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiaretro');
}

export default function CustomTibiaretroKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiaretro" />;
}

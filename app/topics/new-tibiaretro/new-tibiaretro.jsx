import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiaretro');
}

export default function NewTibiaretroKeywordPage() {
  return <StaticKeywordPage slug="new-tibiaretro" />;
}

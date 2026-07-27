import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiaretro-login');
}

export default function CurrentTibiaretroLoginKeywordPage() {
  return <StaticKeywordPage slug="current-tibiaretro-login" />;
}

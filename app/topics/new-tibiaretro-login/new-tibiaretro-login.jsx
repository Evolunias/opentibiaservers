import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiaretro-login');
}

export default function NewTibiaretroLoginKeywordPage() {
  return <StaticKeywordPage slug="new-tibiaretro-login" />;
}

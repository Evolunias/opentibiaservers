import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiaretro-login');
}

export default function CustomTibiaretroLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiaretro-login" />;
}

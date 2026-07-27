import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiaretro-login');
}

export default function ActiveTibiaretroLoginKeywordPage() {
  return <StaticKeywordPage slug="active-tibiaretro-login" />;
}

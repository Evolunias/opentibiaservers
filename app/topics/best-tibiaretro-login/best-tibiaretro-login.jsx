import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiaretro-login');
}

export default function BestTibiaretroLoginKeywordPage() {
  return <StaticKeywordPage slug="best-tibiaretro-login" />;
}

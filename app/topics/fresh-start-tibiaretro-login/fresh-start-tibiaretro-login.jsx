import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiaretro-login');
}

export default function FreshStartTibiaretroLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiaretro-login" />;
}

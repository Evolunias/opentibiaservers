import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiaretro-client');
}

export default function FreshStartTibiaretroClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiaretro-client" />;
}

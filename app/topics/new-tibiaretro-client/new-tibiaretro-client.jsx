import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiaretro-client');
}

export default function NewTibiaretroClientKeywordPage() {
  return <StaticKeywordPage slug="new-tibiaretro-client" />;
}

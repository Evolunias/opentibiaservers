import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiaretro-client');
}

export default function CustomTibiaretroClientKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiaretro-client" />;
}

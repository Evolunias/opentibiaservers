import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiaretro-client');
}

export default function ActiveTibiaretroClientKeywordPage() {
  return <StaticKeywordPage slug="active-tibiaretro-client" />;
}

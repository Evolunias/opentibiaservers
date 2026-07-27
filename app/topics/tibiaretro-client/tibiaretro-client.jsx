import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-client');
}

export default function TibiaretroClientKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-client" />;
}

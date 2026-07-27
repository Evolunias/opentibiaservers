import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-poland-server');
}

export default function TibiaretroPolandServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-poland-server" />;
}

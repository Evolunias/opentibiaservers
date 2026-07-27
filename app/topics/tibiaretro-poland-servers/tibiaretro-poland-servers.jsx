import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-poland-servers');
}

export default function TibiaretroPolandServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-poland-servers" />;
}

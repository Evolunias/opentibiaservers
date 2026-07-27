import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-wars');
}

export default function TibiaretroWarsKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-wars" />;
}

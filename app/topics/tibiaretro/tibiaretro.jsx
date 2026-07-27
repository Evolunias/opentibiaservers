import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro');
}

export default function TibiaretroKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro" />;
}

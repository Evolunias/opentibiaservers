import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-status');
}

export default function TibiaretroStatusKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-status" />;
}

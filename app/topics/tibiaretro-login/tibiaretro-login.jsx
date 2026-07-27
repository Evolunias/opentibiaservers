import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-login');
}

export default function TibiaretroLoginKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-login" />;
}

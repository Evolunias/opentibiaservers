import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiaretro-login');
}

export default function HighrateTibiaretroLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiaretro-login" />;
}

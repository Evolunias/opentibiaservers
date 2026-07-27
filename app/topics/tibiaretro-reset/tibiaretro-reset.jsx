import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-reset');
}

export default function TibiaretroResetKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-reset" />;
}

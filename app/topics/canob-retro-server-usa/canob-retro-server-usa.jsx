import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-retro-server-usa');
}

export default function CanobRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="canob-retro-server-usa" />;
}

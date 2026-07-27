import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-retro-server-canada');
}

export default function CanobRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="canob-retro-server-canada" />;
}

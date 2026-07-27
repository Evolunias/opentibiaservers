import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-retro-server-poland');
}

export default function CanobRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="canob-retro-server-poland" />;
}

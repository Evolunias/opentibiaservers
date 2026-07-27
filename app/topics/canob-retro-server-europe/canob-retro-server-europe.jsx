import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-retro-server-europe');
}

export default function CanobRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="canob-retro-server-europe" />;
}

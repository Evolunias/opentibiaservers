import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-fresh-start-server-europe');
}

export default function CanobFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="canob-fresh-start-server-europe" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-fresh-start-server-uk');
}

export default function CanobFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="canob-fresh-start-server-uk" />;
}

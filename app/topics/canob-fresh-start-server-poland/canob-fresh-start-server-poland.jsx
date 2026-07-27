import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-fresh-start-server-poland');
}

export default function CanobFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="canob-fresh-start-server-poland" />;
}

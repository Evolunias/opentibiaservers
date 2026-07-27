import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-low-exp-server-uk');
}

export default function CanobLowExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="canob-low-exp-server-uk" />;
}

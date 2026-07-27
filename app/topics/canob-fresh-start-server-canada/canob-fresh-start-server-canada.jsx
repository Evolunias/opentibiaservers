import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-fresh-start-server-canada');
}

export default function CanobFreshStartServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="canob-fresh-start-server-canada" />;
}

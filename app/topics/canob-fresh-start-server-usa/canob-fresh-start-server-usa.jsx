import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-fresh-start-server-usa');
}

export default function CanobFreshStartServerUsaKeywordPage() {
  return <StaticKeywordPage slug="canob-fresh-start-server-usa" />;
}

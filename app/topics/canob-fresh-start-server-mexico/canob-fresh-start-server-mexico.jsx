import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-fresh-start-server-mexico');
}

export default function CanobFreshStartServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="canob-fresh-start-server-mexico" />;
}

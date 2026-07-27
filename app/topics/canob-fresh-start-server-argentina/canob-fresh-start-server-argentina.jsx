import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-fresh-start-server-argentina');
}

export default function CanobFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="canob-fresh-start-server-argentina" />;
}

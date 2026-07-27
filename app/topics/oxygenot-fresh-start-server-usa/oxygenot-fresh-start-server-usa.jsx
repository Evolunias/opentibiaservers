import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-fresh-start-server-usa');
}

export default function OxygenotFreshStartServerUsaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-fresh-start-server-usa" />;
}

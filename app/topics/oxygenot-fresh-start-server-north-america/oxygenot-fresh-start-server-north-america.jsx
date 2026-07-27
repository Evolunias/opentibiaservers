import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-fresh-start-server-north-america');
}

export default function OxygenotFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-fresh-start-server-north-america" />;
}

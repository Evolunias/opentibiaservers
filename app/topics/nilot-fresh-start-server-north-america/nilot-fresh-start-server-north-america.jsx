import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-fresh-start-server-north-america');
}

export default function NilotFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-fresh-start-server-north-america" />;
}

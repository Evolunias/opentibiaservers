import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-non-pvp-server-brazil');
}

export default function NilotNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nilot-non-pvp-server-brazil" />;
}

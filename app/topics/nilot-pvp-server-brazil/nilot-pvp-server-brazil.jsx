import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvp-server-brazil');
}

export default function NilotPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvp-server-brazil" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvp');
}

export default function NilotPvpKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvp" />;
}

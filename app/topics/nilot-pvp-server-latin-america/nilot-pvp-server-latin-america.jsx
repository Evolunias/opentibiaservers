import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvp-server-latin-america');
}

export default function NilotPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvp-server-latin-america" />;
}

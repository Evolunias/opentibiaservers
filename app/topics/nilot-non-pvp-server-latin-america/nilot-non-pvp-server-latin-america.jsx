import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-non-pvp-server-latin-america');
}

export default function NilotNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-non-pvp-server-latin-america" />;
}

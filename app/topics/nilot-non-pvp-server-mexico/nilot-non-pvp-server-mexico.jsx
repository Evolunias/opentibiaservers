import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-non-pvp-server-mexico');
}

export default function NilotNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="nilot-non-pvp-server-mexico" />;
}

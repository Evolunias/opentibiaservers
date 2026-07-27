import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvp-server-mexico');
}

export default function NilotPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvp-server-mexico" />;
}

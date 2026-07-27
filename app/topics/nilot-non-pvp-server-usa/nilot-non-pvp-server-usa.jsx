import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-non-pvp-server-usa');
}

export default function NilotNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nilot-non-pvp-server-usa" />;
}

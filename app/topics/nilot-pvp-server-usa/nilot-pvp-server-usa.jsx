import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvp-server-usa');
}

export default function NilotPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvp-server-usa" />;
}

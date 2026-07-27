import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-non-pvp-server-canada');
}

export default function NilotNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="nilot-non-pvp-server-canada" />;
}

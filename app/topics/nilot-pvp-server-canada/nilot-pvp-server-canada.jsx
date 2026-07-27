import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvp-server-canada');
}

export default function NilotPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvp-server-canada" />;
}

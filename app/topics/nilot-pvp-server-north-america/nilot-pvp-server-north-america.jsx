import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvp-server-north-america');
}

export default function NilotPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvp-server-north-america" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-non-pvp-server-north-america');
}

export default function NilotNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-non-pvp-server-north-america" />;
}

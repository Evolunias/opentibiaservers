import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-non-pvp-server-france');
}

export default function NilotNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nilot-non-pvp-server-france" />;
}

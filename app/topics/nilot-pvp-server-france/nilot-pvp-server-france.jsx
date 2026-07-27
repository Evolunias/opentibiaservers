import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvp-server-france');
}

export default function NilotPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvp-server-france" />;
}

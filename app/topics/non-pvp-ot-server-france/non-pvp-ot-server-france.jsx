import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-ot-server-france');
}

export default function NonPvpOtServerFranceKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-ot-server-france" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-non-pvp-server-france');
}

export default function TibianusNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibianus-non-pvp-server-france" />;
}

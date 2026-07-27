import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-non-pvp-server-france');
}

export default function UnlineNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="unline-non-pvp-server-france" />;
}

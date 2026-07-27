import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-server-list-france');
}

export default function NonPvpServerListFranceKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-server-list-france" />;
}

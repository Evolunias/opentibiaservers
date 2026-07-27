import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-status-france');
}

export default function NonPvpStatusFranceKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-status-france" />;
}

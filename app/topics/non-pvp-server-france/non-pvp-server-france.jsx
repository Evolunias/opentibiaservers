import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-server-france');
}

export default function NonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-server-france" />;
}

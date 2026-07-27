import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-pvp-server-france');
}

export default function MiraclePvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="miracle-pvp-server-france" />;
}

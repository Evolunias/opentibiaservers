import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvp-server-france');
}

export default function ThorniaPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvp-server-france" />;
}

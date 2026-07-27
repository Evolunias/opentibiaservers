import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-10-0-non-pvp-server');
}

export default function CalmeraOt100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-10-0-non-pvp-server" />;
}

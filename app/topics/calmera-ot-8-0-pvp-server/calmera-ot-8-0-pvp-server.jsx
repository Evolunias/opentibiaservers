import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-8-0-pvp-server');
}

export default function CalmeraOt80PvpServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-8-0-pvp-server" />;
}

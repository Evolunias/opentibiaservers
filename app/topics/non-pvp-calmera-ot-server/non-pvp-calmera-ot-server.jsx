import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-calmera-ot-server');
}

export default function NonPvpCalmeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-calmera-ot-server" />;
}

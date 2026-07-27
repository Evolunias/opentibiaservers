import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-pvp-server-france');
}

export default function OriginaltibiaPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-pvp-server-france" />;
}

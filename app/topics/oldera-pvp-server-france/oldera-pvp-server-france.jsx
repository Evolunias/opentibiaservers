import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-pvp-server-france');
}

export default function OlderaPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="oldera-pvp-server-france" />;
}

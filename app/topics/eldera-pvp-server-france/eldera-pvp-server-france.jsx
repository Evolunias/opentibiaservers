import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-pvp-server-france');
}

export default function ElderaPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="eldera-pvp-server-france" />;
}

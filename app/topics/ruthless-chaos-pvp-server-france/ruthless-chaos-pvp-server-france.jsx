import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-pvp-server-france');
}

export default function RuthlessChaosPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-pvp-server-france" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-pvp-server-uk');
}

export default function RuthlessChaosPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-pvp-server-uk" />;
}

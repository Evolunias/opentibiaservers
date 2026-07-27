import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-pvp-server-europe');
}

export default function RuthlessChaosPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-pvp-server-europe" />;
}

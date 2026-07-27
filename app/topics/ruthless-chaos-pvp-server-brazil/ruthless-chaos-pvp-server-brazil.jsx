import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-pvp-server-brazil');
}

export default function RuthlessChaosPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-pvp-server-brazil" />;
}

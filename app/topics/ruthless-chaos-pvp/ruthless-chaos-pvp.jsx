import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-pvp');
}

export default function RuthlessChaosPvpKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-pvp" />;
}

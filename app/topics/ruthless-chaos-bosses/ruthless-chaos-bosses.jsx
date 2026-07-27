import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-bosses');
}

export default function RuthlessChaosBossesKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-bosses" />;
}

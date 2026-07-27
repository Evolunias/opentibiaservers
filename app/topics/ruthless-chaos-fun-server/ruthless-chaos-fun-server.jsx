import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-fun-server');
}

export default function RuthlessChaosFunServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-fun-server" />;
}

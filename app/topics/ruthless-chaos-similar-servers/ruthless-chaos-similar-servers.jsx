import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-similar-servers');
}

export default function RuthlessChaosSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-similar-servers" />;
}

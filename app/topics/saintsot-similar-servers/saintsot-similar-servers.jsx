import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-similar-servers');
}

export default function SaintsotSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="saintsot-similar-servers" />;
}

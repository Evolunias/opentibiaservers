import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-similar-servers');
}

export default function NoxiousotSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-similar-servers" />;
}

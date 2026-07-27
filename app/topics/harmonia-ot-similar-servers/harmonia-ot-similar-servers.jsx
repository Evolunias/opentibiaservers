import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-similar-servers');
}

export default function HarmoniaOtSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-similar-servers" />;
}

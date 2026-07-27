import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-similar-servers');
}

export default function OtmadnessSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="otmadness-similar-servers" />;
}

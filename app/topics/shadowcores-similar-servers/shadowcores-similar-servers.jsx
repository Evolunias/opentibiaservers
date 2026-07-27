import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-similar-servers');
}

export default function ShadowcoresSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-similar-servers" />;
}

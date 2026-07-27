import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-similar-servers');
}

export default function MiracleSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="miracle-similar-servers" />;
}

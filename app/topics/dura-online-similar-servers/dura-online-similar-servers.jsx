import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-similar-servers');
}

export default function DuraOnlineSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="dura-online-similar-servers" />;
}

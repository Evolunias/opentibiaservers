import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-similar-servers');
}

export default function LumineraSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-similar-servers" />;
}

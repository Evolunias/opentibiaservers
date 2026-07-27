import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-similar-servers');
}

export default function MediviaSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-similar-servers" />;
}

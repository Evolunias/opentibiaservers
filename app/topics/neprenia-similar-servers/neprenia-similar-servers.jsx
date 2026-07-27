import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-similar-servers');
}

export default function NepreniaSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="neprenia-similar-servers" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-similar-servers');
}

export default function BlazeraSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="blazera-similar-servers" />;
}

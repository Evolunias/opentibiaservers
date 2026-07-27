import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-alternatives');
}

export default function ArchlightAlternativesKeywordPage() {
  return <StaticKeywordPage slug="archlight-alternatives" />;
}

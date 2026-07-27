import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-guide');
}

export default function NepreniaGuideKeywordPage() {
  return <StaticKeywordPage slug="neprenia-guide" />;
}

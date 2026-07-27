import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-calmera-ot-create-account');
}

export default function PopularCalmeraOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-calmera-ot-create-account" />;
}

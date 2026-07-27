import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-infernal-ot-create-account');
}

export default function PopularInfernalOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-infernal-ot-create-account" />;
}

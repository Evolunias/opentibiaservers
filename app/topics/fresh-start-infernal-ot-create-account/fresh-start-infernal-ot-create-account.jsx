import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-infernal-ot-create-account');
}

export default function FreshStartInfernalOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-infernal-ot-create-account" />;
}

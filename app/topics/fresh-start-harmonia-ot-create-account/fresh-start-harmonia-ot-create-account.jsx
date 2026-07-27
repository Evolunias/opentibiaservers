import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-harmonia-ot-create-account');
}

export default function FreshStartHarmoniaOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-harmonia-ot-create-account" />;
}

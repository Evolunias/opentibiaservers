import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-noxiousot-create-account');
}

export default function FreshStartNoxiousotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-noxiousot-create-account" />;
}

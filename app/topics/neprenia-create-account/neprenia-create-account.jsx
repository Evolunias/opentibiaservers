import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-create-account');
}

export default function NepreniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="neprenia-create-account" />;
}

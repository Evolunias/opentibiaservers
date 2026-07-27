import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-create-account');
}

export default function KasteriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="kasteria-create-account" />;
}

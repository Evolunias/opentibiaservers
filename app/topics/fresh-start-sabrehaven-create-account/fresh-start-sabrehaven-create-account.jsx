import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-sabrehaven-create-account');
}

export default function FreshStartSabrehavenCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-sabrehaven-create-account" />;
}

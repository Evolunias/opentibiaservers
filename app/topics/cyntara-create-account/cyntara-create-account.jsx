import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-create-account');
}

export default function CyntaraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="cyntara-create-account" />;
}

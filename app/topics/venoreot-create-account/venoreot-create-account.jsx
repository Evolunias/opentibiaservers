import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-create-account');
}

export default function VenoreotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="venoreot-create-account" />;
}

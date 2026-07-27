import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-thaisot-login');
}

export default function ActiveThaisotLoginKeywordPage() {
  return <StaticKeywordPage slug="active-thaisot-login" />;
}

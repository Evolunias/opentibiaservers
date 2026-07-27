import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-thaisot-login');
}

export default function CustomThaisotLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-thaisot-login" />;
}

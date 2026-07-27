import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-xanteria-create-account');
}

export default function CustomXanteriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-xanteria-create-account" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-xanteria-create-account');
}

export default function ActiveXanteriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-xanteria-create-account" />;
}

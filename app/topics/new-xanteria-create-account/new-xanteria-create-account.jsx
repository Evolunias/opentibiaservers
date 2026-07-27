import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-xanteria-create-account');
}

export default function NewXanteriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-xanteria-create-account" />;
}

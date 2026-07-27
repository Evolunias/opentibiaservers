import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-xanteria-create-account');
}

export default function PopularXanteriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-xanteria-create-account" />;
}

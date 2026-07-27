import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-xanteria-create-account');
}

export default function LowrateXanteriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-xanteria-create-account" />;
}

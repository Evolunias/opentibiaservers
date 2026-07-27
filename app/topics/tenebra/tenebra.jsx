import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tenebra');
}

export default function TenebraKeywordPage() {
  return <StaticKeywordPage slug="tenebra" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tenebra-world');
}

export default function TenebraWorldKeywordPage() {
  return <StaticKeywordPage slug="tenebra-world" />;
}

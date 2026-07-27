import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nerana');
}

export default function NeranaKeywordPage() {
  return <StaticKeywordPage slug="nerana" />;
}

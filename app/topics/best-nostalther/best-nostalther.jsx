import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nostalther');
}

export default function BestNostaltherKeywordPage() {
  return <StaticKeywordPage slug="best-nostalther" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nostalther');
}

export default function PopularNostaltherKeywordPage() {
  return <StaticKeywordPage slug="popular-nostalther" />;
}

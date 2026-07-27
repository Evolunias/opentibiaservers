import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nostalther');
}

export default function TopNostaltherKeywordPage() {
  return <StaticKeywordPage slug="top-nostalther" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nostalther');
}

export default function FreshStartNostaltherKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nostalther" />;
}

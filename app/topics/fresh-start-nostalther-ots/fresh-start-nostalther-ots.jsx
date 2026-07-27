import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nostalther-ots');
}

export default function FreshStartNostaltherOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nostalther-ots" />;
}

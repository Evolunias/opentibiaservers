import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nostalther-ot');
}

export default function FreshStartNostaltherOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nostalther-ot" />;
}
